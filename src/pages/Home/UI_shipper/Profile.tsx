import "../style.css";
import "../UI_shipper/style/profile.css";

import {
  UserCircleIcon,
  CheckBadgeIcon,
  DocumentTextIcon,
  MapPinIcon,
  EnvelopeIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
const Profile = () => {
  return (
    <div className="profile_container style">
      <div className="profile_content">
        <div className="profile-section">
          <div className="profile_cover_photo">
            <img
              src="https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/474099XYj/hinh-nen-bien-dep-cho-dien-thoai-tuyet-dep_025637077.jpg"
              alt="Cover"
            />
            <img
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt="Profile"
              className="profile-img"
            />
          </div>
          <div className="profile_stats">
            <div className="profile_stat_item">
              <DocumentTextIcon className="icon_size" />
              <h3>938</h3>
              <p>Report</p>
            </div>
            <div className="profile_stat_item">
              <UserCircleIcon className="icon_size" />
              <h3>3,586</h3>
              <p>Customers</p>
            </div>
            <div className="profile_stat_item">
              <CheckBadgeIcon className="icon_size" />
              <h3>2,659</h3>
              <p>Evaluate</p>
            </div>
          </div>
          <div className="info_post">
            <div className="info">
              <h2>Introduction</h2>
              <p>
                Hello, I am David McMichael. I love making websites and
                graphics.
              </p>
              <ul>
                <li>
                  <BriefcaseIcon className="icon_size" />
                  Sir, P P Institute Of Science
                </li>
                <li>
                  <EnvelopeIcon className="icon_size" />
                  xyzjonathan@gmail.com
                </li>
                <li>
                  <GlobeAltIcon className="icon_size" />
                  www.xyz.com
                </li>
                <li>
                  <MapPinIcon className="icon_size" />
                  New York, USA - 100001
                </li>
              </ul>
            </div>
            <div className="post">
              <textarea placeholder="Share your thoughts"></textarea>
              <div className="post_actions">
                <div className="post_select">
                  <button>
                    <PhotoIcon className="icon_size" />
                  </button>
                  <h3>Photos / Video</h3>
                  <button className="article_btn">
                    <DocumentTextIcon className="icon_size" />
                  </button>
                  <h3>Article</h3>
                </div>
                <button className="post_btn">Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
