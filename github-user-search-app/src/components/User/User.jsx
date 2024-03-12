import Card from "../UI/Card";
import IconButton from "../UI/IconButton";
import "../../App.css";

import IconCompany from "../../components/Icons/IconCompany";
import IconTwitter from "../../components/Icons/IconTwitter";
import IconLocation from "../../components/Icons/IconLocation";
import IconLink from "../../components/Icons/IconLink";

function User({ userData: user }) {
  const now = new Date(user.created_at);
  const locale = navigator.language;
  const userRegistrationDate = new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(now);

  return (
    <Card>
      <div className="user">
        <img
          className="profile-picture"
          src={user.avatar_url}
          alt="profile-img"
        />
        <div
          style={{ "--main-axis-aln": "flex-start" }}
          className="user__profile mb-20"
        >
          <div className="user__profile__info">
            <div>
              <h2 className="heading clr-neutral">{user.name ?? user.login}</h2>

              <small className="text-label clr-primary">@{user.login}</small>
            </div>
            <p>Joined {userRegistrationDate}</p>
          </div>
        </div>
        <div className="spacer-lg"></div>
        <div className="user__data">
          <p className="text-body mb-32">{`${
            user.bio ?? `This profile has no bio`
          }`}</p>

          <div
            style={{ "--cross-axis-aln": "space-around" }}
            className="bg-dark border-stadium row mb-36 p-16"
          >
            <div>
              <small className="text-caption">Repos</small>
              <p className="text-body-lg text-bold clr-neutral">
                {user.public_repos}
              </p>
            </div>
            <div>
              <small className="text-caption">Followers</small>
              <p className="text-body-lg text-bold clr-neutral">
                {user.followers}
              </p>
            </div>
            <div>
              <small className="text-caption">Following</small>
              <p className="text-body-lg text-bold clr-neutral">
                {user.following}
              </p>
            </div>
          </div>
          <div className="social-links">
            <IconButton
              disabled={!user.location}
              icon={IconLocation}
              hyperlink="#"
              textContent={`${user.location || `Not available`}`}
            />
            <IconButton
              disabled={!user.twitter_username}
              icon={IconTwitter}
              hyperlink="#"
              textContent={`${user.twitter_username || `Not available`}`}
            />
            <IconButton
              disabled={!user.blog}
              icon={IconLink}
              hyperlink="#"
              textContent={`${user.blog || `Not available`}`}
            />
            <IconButton
              icon={IconCompany}
              hyperlink="#"
              textContent={`${user.company || `Not available`}`}
              disabled={!user.company}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default User;
