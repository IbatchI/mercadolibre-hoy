import './Paginator.css'

export default function Paginator({ totalResults, page, handleLoadMore }) {
  const NUM_OF_PAGES = Math.ceil(totalResults / 12)
  console.log(page)
  const pages = []
  for (let i = 1; i <= NUM_OF_PAGES; i++) pages.push(i)
  return (
    <div>
      {pages.map((pageNumber) => (
        <button
          className="btn-pagination"
          key={pageNumber}
          onClick={() => handleLoadMore(pageNumber)}
          style={{
            color:
              page === pageNumber
                ? 'var(--focus-primary-color)'
                : 'var(--primary-color)',
          }}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  )
}
