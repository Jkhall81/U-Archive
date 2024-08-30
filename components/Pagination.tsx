import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationComponentProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const PaginationComponent = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationComponentProps) => {
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          />
        </PaginationItem>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href="#"
              isActive={currentPage === page}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        {totalPages > 5 && <PaginationEllipsis />}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() =>
              handlePageChange(Math.min(currentPage + 1, totalPages))
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
