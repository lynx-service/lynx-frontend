import type { ArticleItem } from "~/types/article";
import { HeadingList } from "./HeadingList";
import { Heading1, Heading2, Heading3 } from "lucide-react";

interface Props {
  item: ArticleItem;
}

export function ScrapingResultHeadings({ item }: Props) {
  return (
    <div className="border dark:border-gray-700 rounded-lg overflow-hidden">
      <div className="bg-gray-50 dark:bg-gray-800 px-4 py-2 border-b dark:border-gray-700 flex items-center">
        <div className="flex items-center mr-2 text-gray-500 dark:text-gray-400">
          <Heading1 className="h-5 w-5" />
          <Heading2 className="h-4 w-4 -ml-1" />
          <Heading3 className="h-3 w-3 -ml-1" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">見出し構造</h3>
      </div>
      <div className="p-4 bg-white dark:bg-gray-800">
        {item.headings && item.headings.length > 0 ? (
          <HeadingList headings={item.headings} />
        ) : (
          <div className="text-center py-4 text-gray-500 dark:text-gray-400">
            見出しがありません
          </div>
        )}
      </div>
    </div>
  );
}
