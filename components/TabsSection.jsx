import ProfileCatalogEntry from './ProfileCatalogEntry';

export default function TabsSection({ tabs }) {
  return (
    <>
      <ul className="nav nav-tabs mt-4" id="myTab" role="tablist">
        {tabs.map((tab, index) => (
          <li className="nav-item" role="presentation" key={tab.name}>
            <button
              className={`nav-link ${index === 0 && 'active'}`}
              id={`${tab.name}-tab`}
              data-bs-toggle="tab"
              data-bs-target={`#${tab.name}-tab-pane`}
              type="button"
              role="tab"
              aria-controls={`${tab.name}-tab-pane`}
              aria-selected={index === 0}
            >
              {tab.name}
            </button>
          </li>
        ))}
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
