const Pagination = ({ current, total, onPageChange }) => {
  const compactPages = [];
  for (let i = 1; i <= total; i++) {
    const isFirstPage = i === 1;
    const isLastPage = i === total;
    const isNearbyPage = Math.abs(i - current) <= 1;

    if (isFirstPage || isLastPage || isNearbyPage) {
      compactPages.push(i);
    }
  }

  return (
    <div className="flex items-center gap-1 flex-wrap">
      <button
        onClick={() => onPageChange(1)}
        disabled={current === 1}
        className="w-6.5 h-6.5 border border-border rounded-md flex items-center justify-center text-xs text-muted-foreground hover:bg-card hover:border-border-strong hover:text-foreground transition-all disabled:opacity-40"
      >
        {"<<"}
      </button>
      <button
        onClick={() => onPageChange(Math.max(1, current - 1))}
        disabled={current === 1}
        className="w-6.5 h-6.5 border border-border rounded-md flex items-center justify-center text-xs text-muted-foreground hover:bg-card hover:border-border-strong hover:text-foreground transition-all disabled:opacity-40"
      >
        {"<"}
      </button>
      {compactPages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={`w-6.5 h-6.5 border rounded-md flex items-center justify-center text-xs transition-all ${
            p === current
              ? "bg-ac-blue text-primary-foreground border-ac-blue"
              : "border-border text-muted-foreground hover:bg-card hover:border-border-strong hover:text-foreground"
          }`}
        >
          {p}
        </button>
      ))}
      <button
        onClick={() => onPageChange(Math.min(total, current + 1))}
        disabled={current === total}
        className="w-6.5 h-6.5 border border-border rounded-md flex items-center justify-center text-xs text-muted-foreground hover:bg-card hover:border-border-strong hover:text-foreground transition-all disabled:opacity-40"
      >
        {">"}
      </button>
      <button
        onClick={() => onPageChange(total)}
        disabled={current === total}
        className="w-6.5 h-6.5 border border-border rounded-md flex items-center justify-center text-xs text-muted-foreground hover:bg-card hover:border-border-strong hover:text-foreground transition-all disabled:opacity-40"
      >
        {">>"}
      </button>
    </div>
  );
};

export default Pagination;
