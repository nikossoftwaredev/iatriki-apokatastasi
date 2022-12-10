import { scientificArticles } from 'data/scientific-articles';
import { PageProps } from 'types/general';
import ButtonLink from 'ui/ButtonLink';

const findPreviousArticlePath = (index: number): string => {
  const articleIndex = index === 0 ? scientificArticles.length - 1 : index - 1;
  return scientificArticles[articleIndex].path;
};

const findNextArticlePath = (index: number): string => {
  const articleIndex = index === scientificArticles.length - 1 ? 0 : index + 1;
  return scientificArticles[articleIndex].path;
};

const Page = ({ params }: PageProps) => {
  const { article } = params;

  const articleInfoIndex = scientificArticles.findIndex(sc => sc.path === article);
  const articleInfo = scientificArticles[articleInfoIndex ?? 0];

  const { title, content } = articleInfo;
  return (
    <div>
      <ButtonLink href={`/scientific-articles/${findPreviousArticlePath(articleInfoIndex)}`}>
        Προηγουμενο
      </ButtonLink>
      <ButtonLink href={`/scientific-articles/${findNextArticlePath(articleInfoIndex)}`}>
        Επομενο
      </ButtonLink>

      <h1>{title}</h1>
    </div>
  );
};

export default Page;
