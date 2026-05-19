import { useState } from "react";

import { useTranslation } from "react-i18next";

import { usePage } from "./usePage";

import { PageWrapper, Main, Content } from "./styled";
import AnswerHeader from "@/components/answer/AnswerHeader";
import HeroSection from "@/components/answer/HeroSection";
import ReviewList from "@/components/answer/ReviewList";
import AnswerFooter from "@/components/answer/AnswerFooter";

export default function Page() {
  const { t } = useTranslation();

  const { reviews } = usePage();

  const [activeItems, setActiveItems] = useState<number[]>([]);

  const handleToggle = (id: number) => {
    setActiveItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const activeCount = activeItems.length;

  return (
    <PageWrapper>
      <AnswerHeader t={t} />

      <Main>
        <Content>
          <HeroSection t={t} activeCount={activeCount} />

          <ReviewList
            reviews={reviews}
            activeItems={activeItems}
            handleToggle={handleToggle}
            t={t}
          />
        </Content>
      </Main>

      <AnswerFooter t={t} activeCount={activeCount} />
    </PageWrapper>
  );
}
