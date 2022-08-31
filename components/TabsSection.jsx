import ProfileCatalogEntry from './ProfileCatalogEntry';

export default function TabsSection({ tabs }) {
  return (
    <>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="mentors-tab"
            data-bs-toggle="tab"
            data-bs-target="#mentors-tab-pane"
            type="button"
            role="tab"
            aria-controls="mentors-tab-pane"
            aria-selected="true"
          >
            Mentors
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="fellows-tab"
            data-bs-toggle="tab"
            data-bs-target="#fellows-tab-pane"
            type="button"
            role="tab"
            aria-controls="fellows-tab-pane"
            aria-selected="false"
          >
            Fellows
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        {tabs.map((tab, index) => (
          <div
            key={tab.name}
            className={`tab-pane fade ${index === 0 && 'show active'}`}
            id={`${tab.name}-tab-pane`}
            role="tabpanel"
            aria-labelledby={`${tab.name}-tab`}
            tabIndex={index}
          >
            <div className="grid xl:grid-cols-2" id={`grid-${tab.name}`}>
              {tab.list.map((profile) => (
                <ProfileCatalogEntry
                  key={`${tab.name}-${profile.id}`}
                  firstName={profile.firstName}
                  lastName={profile.lastName}
                  middleName={profile.middleName}
                  graduationDate={profile.graduationDate ?? NaN}
                  position={profile.position}
                  email={profile.email}
                  socialMedia={profile.socialMedia}
                  photo={profile.photo}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
