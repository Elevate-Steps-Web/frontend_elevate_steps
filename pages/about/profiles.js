import Container from '../../components/Container';
import { Page } from '../../components/Page';
import PageHeader from '../../components/PageHeader';
import TabsSection from '../../components/TabsSection';
import { fetchAPI } from '../../lib/api';

export default function ProfilesPage({
    global,
    // pageContent: {
    //   pageHeader,
    // },
}) {

    return (
        <Page global={global} currentPage="Contact Us">
            <Container>
                {/* {pageHeader && <PageHeader data={pageHeader} />} */}
                <TabsSection />
            </Container>
        </Page>
    )
}



// export async function getStaticProps({ locale: routeLocale }) {
//     // get Page properties
//     const page = await fetchAPI('/about/profiles', {
//         populate: {
//             content: {
//                 populate: '*',
//             },
//             defaultSeo: {
//                 populate: '*',
//             },
//         },
//         locale: routeLocale,
//     });
//     // TODO: loop through objects and filter objects based on __component property
//     const pageContent = {};
//     const {
//         data: {
//             attributes: { content },
//         },
//     } = page;
//     if (content === null) {
//         console.log('No data content in contact page.');
//         return {
//             notFound: true,
//         };
//     }
//     content.forEach((item) => {
//         /* eslint-disable-next-line no-underscore-dangle */
//         switch (item.__component) {
//             case 'text.page-header':
//                 pageContent.pageHeader = item;
//                 break;
//         }
//     });
//     return { props: { pageContent } };
// }