import { useState } from "react";
import logo from "./assets/logo.svg";
import logoMasterCraft from "./assets/logo-mastercraft.svg";
import "./App.css";

import Button, { IconButton } from "./components/Button";
import Dialog from "./components/Dialog";
import {
  IconBookmark,
  IconClose,
  IconCloseFlat,
  IconCheck,
  IconHamburger,
} from "./components/Icons";
import Flex from "./components/Layout/Flex";
import PledgeTile from "./components/Pledge/PledgeTile";
import PledgeTileAlt from "./components/Pledge/PledgeTileAlt";

import pledges from "./data/data";

function App() {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isBookmarked, setIsBookmark] = useState(false);

  const [showDialog, setShowDialog] = useState(false);

  const [pledgeConfirmed, setPledgeConfirmed] = useState(false);
  const [selectedPledge, setSelectedPledge] = useState(null);

  //For controlling the navbar in mobile screens
  function toggleNavbar() {
    setNavOpen((navbarState) => !navbarState);
  }

  //For toggling the bookmark icon
  function toggleBookmark() {
    setIsBookmark((prevValue) => !prevValue);
  }

  //For controlling the dialog and modal state
  function handleDialog() {
    setShowDialog((prev) => !prev);
  }

  function closeDialog() {
    setShowDialog(false);
    setPledgeConfirmed(null);
    setSelectedPledge(null);
  }

  //For controlling the pledges state
  const handlePledgeConfirmation = (pledgeAmount) => {
    setPledgeConfirmed((prevValue) => !prevValue);
  };
  const handlePledgeSelect = (pledge) => {
    setSelectedPledge(pledge);
  };

  return (
    <>
      {showDialog && !pledgeConfirmed && (
        <Dialog onOverlayClick={handleDialog} onClose={handleDialog}>
          <Flex
            mainAxisAlignment="center"
            crossAxisAlignment="space-between"
            className="mb-16"
          >
            <h2>Back this project</h2>
            <IconClose className="icon-close" onClick={handleDialog} />
          </Flex>
          <p className="mb-32">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
          <ul className="pledges--modal">
            {pledges.map((pledge) => {
              return (
                <li key={pledge.id}>
                  <PledgeTile
                    title={pledge.title}
                    subtitle={pledge.subtitle}
                    type={pledge.type}
                    id={pledge.id}
                    description={pledge.description}
                    remainingPledge={pledge.remainingPledge}
                    onPledgeSelect={handlePledgeSelect}
                    onPledgeConfirmation={handlePledgeConfirmation}
                    selected={selectedPledge == pledge.type}
                  />
                </li>
              );
            })}
          </ul>
        </Dialog>
      )}
      {showDialog && pledgeConfirmed && (
        <Dialog onOverlayClick={handleDialog}>
          <Flex axisDirection="column" gap="1.5rem" className="text-center">
            <IconCheck />
            <h2>Thanks for your support!</h2>
            <p>
              Your pledge brings us one step closer to sharing Mastercraft
              Bamboo Monitor Riser worldwide. You will get an email once our
              campaign is completed.
            </p>
            <Button onClick={closeDialog}>Got it!</Button>
          </Flex>
        </Dialog>
      )}
      <>
        <header className="header">
          <div className={`nav__wrapper ${isNavOpen ? "overlay" : ""}`}>
            <a className="nav-logo" href="#">
              <img src={logo} role="presentation" />
            </a>
            <IconButton
              className={`nav-toggle ${isNavOpen ? "visible--fixed" : ""}`}
              onClick={toggleNavbar}
              icon={isNavOpen ? IconCloseFlat : IconHamburger}
            />
            <nav className={`nav ${isNavOpen ? "visible" : ""}`}>
              <ul className="nav-list">
                <li className="nav__item">
                  <a className="nav__link" href="#">
                    About
                  </a>
                </li>
                <li className="nav__item">
                  <a className="nav__link" href="#">
                    Discover
                  </a>
                </li>
                <li className="nav__item">
                  <a className="nav__link" href="#">
                    Get Started
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <section className="hero | container">
            <div className="card bg-white text-center | flow">
              <img
                className="hero__logo"
                src={logoMasterCraft}
                role="presentation"
              />
              <h1 className="heading-md">Mastercraft Bamboo Monitor Riser</h1>
              <p>
                A beautiful & handcrafted monitor stand to reduce neck and eye
                strain.
              </p>
              <Flex
                className="container"
                gap="0.6rem"
                crossAxisAlignment="space-between"
              >
                <Button onClick={handleDialog}>Back this project</Button>
                <IconButton
                  onClick={toggleBookmark}
                  className={`bookmark ${isBookmarked ? "active" : ""}`}
                  icon={IconBookmark}
                  text="Bookmarked"
                />
              </Flex>
            </div>
          </section>
        </header>

        <main className="container">
          <section className="card | fundraise">
            <div className="fundraise__status">
              <Flex axisDirection="column" gap="0.625rem">
                <h2 className="heading-lg">$89,914</h2>
                <p>of $100,000 backed</p>
                <div className="divider"></div>
              </Flex>
              <Flex axisDirection="column" gap="0.625rem">
                <h2 className="heading-lg">5,007</h2>
                <p>total backers</p>
                <div className="divider"></div>
              </Flex>
              <Flex axisDirection="column" gap="0.625rem">
                <h2 className="heading-lg">56</h2>
                <p>days left</p>
              </Flex>
            </div>

            <div className="progress"></div>
          </section>

          <section className="card">
            <h2 className="heading-sm mb-24">About this project</h2>
            <p>
              The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
              platform that elevates your screen to a more comfortable viewing
              height. Placing your monitor at eye level has the potential to
              improve your posture and make you more comfortable while at work,
              helping you stay focused on the task at hand. Featuring artisan
              craftsmanship, the simplicity of design creates extra desk space
              below your computer to allow notepads, pens, and USB sticks to be
              stored under the stand.
            </p>{" "}
            <ul className="pledges">
              {pledges
                .filter((pledge) => pledge.requiresFunding)
                .map((pledgePlan) => {
                  return (
                    <PledgeTileAlt
                      title={pledgePlan.title}
                      description={pledgePlan.description}
                      remainingItems={pledgePlan.remainingPledge}
                      requiresFunding={pledgePlan.requiresFunding}
                    />
                  );
                })}
            </ul>
          </section>
        </main>
      </>
    </>
  );
}

export default App;
