interface PaginationProps {
  total: number;       // total count of secrets
  take: number;        // items per page
  currentPage: number; // current page
  onPageChange: (page: number) => void;
}

export default function Pagination({ total, take, currentPage, onPageChange }: PaginationProps) {
  const totalPages = Math.ceil(total / take);
  if (totalPages <= 1) return null;

  return (
    <div style={{ display: "flex", gap: 8, marginTop: 16 , justifyContent: "center", alignItems: "center"}}>
      <button disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
        Previous
      </button>

      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i + 1)}
          style={{
            fontWeight: i + 1 === currentPage ? "bold" : "normal",
            border: i + 1 === currentPage ? "1px solid black" : "none",
            padding: "4px 8px",
          }}
        >
          {i + 1}
        </button>
      ))}

      <button disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
        Next
      </button>
    </div>
  );
}
