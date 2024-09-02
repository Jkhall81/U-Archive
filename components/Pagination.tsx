import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

interface PaginationComponentProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  setDetailDisplayOpen: (isOpen: boolean) => void;
  setSelectedEventItem: (item: null) => void;
}

export const PaginationComponent = ({
  currentPage,
  totalPages,
  onPageChange,
  setDetailDisplayOpen,
  setSelectedEventItem,
}: PaginationComponentProps) => {
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={cn(
              "text-xl",
              `${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`
            )}
            href="#"
            onClick={() => {
              handlePageChange(Math.max(currentPage - 1, 1));
              setDetailDisplayOpen(false);
              setSelectedEventItem(null);
            }}
          />
        </PaginationItem>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href="#"
              isActive={currentPage === page}
              onClick={() => {
                handlePageChange(page);
                setDetailDisplayOpen(false);
                setSelectedEventItem(null);
              }}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        {totalPages > 5 && <PaginationEllipsis />}
        <PaginationItem>
          <PaginationNext
            className={cn(
              "text-xl",
              `${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`
            )}
            href="#"
            onClick={() => {
              handlePageChange(Math.min(currentPage + 1, totalPages));
              setDetailDisplayOpen(false);
              setSelectedEventItem(null);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
