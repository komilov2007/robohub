import { usePage } from "./usePage";

import {
  Content,
  Header,
  Page,
  TabsWrap,
  TabButton,
  CountBadge,
  Title,
} from "./styled";
import PageToolbar from "@/components/comment/PageToolbar";
import ReviewsTable from "@/components/comment/ReviewsTable";
import ReviewDetails from "@/components/comment/ReviewDetails";

export default function CommentPage() {
  const data = usePage();

  return (
    <Page>
      <Header>
        <Title>{data.t("review_title")}</Title>
      </Header>

      <TabsWrap>
        {data.tabs.map((tab) => (
          <TabButton
            key={tab.key}
            active={data.activeTab === tab.key}
            onClick={() => data.setActiveTab(tab.key)}
          >
            {tab.label}

            <CountBadge active={data.activeTab === tab.key}>
              {tab.count}
            </CountBadge>
          </TabButton>
        ))}
      </TabsWrap>

      <PageToolbar {...data} />

      <Content>
        <ReviewsTable {...data} />

        <ReviewDetails {...data} />
      </Content>
    </Page>
  );
}
