import ProfileCatalogEntry from "./ProfileCatalogEntry";

export default function TabsSection({ data }) {
    return (
        <>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="mentors-tab" data-bs-toggle="tab" data-bs-target="#mentors-tab-pane" type="button" role="tab" aria-controls="mentors-tab-pane" aria-selected="true">Mentors</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="fellows-tab" data-bs-toggle="tab" data-bs-target="#fellows-tab-pane" type="button" role="tab" aria-controls="fellows-tab-pane" aria-selected="false">Fellows</button>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="mentors-tab-pane" role="tabpanel" aria-labelledby="mentors-tab" tabindex="0">
                    <div className="grid xl:grid-cols-2" id="grid for mentors">
                        {/* for loop  */}
                        <ProfileCatalogEntry />
                        <ProfileCatalogEntry />
                        <ProfileCatalogEntry />
                    </div>
                </div>
                <div class="tab-pane fade" id="fellows-tab-pane" role="tabpanel" aria-labelledby="fellows-tab" tabindex="0">
                    <div className="grid xl:grid-cols-2" id="grid for mentors">
                        {/* for loop  */}
                        <ProfileCatalogEntry />
                    </div>
                </div>

            </div>
        </>
    )
}