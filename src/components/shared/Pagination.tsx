import FeatherIcon from 'feather-icons-react'
import React, { useState } from 'react'

interface PaginationProps {
  data: any[] // Replace `any` with your actual data type
  currentPage: number
  onPageChange: (pageNumber: number) => void
  handleItemsPerPageChange: (items: number) => void
  itemsPerPage: number // Optional prop for items per page (defaults to 10)
}

const Pagination: React.FC<PaginationProps> = ({
  data,
  currentPage,
  onPageChange,
  itemsPerPage,
  handleItemsPerPageChange
}) => {
  const [pageNumberInput, setPageNumberInput] = useState(currentPage)

  const totalPages = Math.ceil(data.length / itemsPerPage)

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPageNumber = parseInt(event.target.value, 10)
    if (
      !isNaN(newPageNumber) &&
      newPageNumber > 0 &&
      newPageNumber <= totalPages
    ) {
      setPageNumberInput(newPageNumber)
    }
  }
  const setItemsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPageNumber = parseInt(event.target.value, 10)
    if (
      !isNaN(newPageNumber) &&
      newPageNumber > 0 &&
      newPageNumber <= data.length
    ) {
      handleItemsPerPageChange(newPageNumber)
    }
  }

  const handleJumpToPage = () => {
    onPageChange(pageNumberInput)
  }

  const RenderPaginationButtons = () => {
    const buttons = []
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          className={`${
            currentPage === i
              ? 'bg-slate-500 rounded-full p-1 size-8 text-white'
              : ''
          }`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      )
    }
    return buttons
  }

  return (
    <div className='grid md:grid-cols-2 gap-4 mt-10'>
      <div className='flex items-center col-auto'>
        <div>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <input
            type='number'
            className='ml-2 px-2 py-1 border rounded-md'
            value={pageNumberInput}
            onChange={handleInputChange}
          />
          <button
            className='ml-2 px-2 py-1 rounded-md bg-blue-500 hover:bg-blue-700 text-white'
            onClick={handleJumpToPage}
          >
            Go
          </button>
        </div>
        <div>
          <span>items per page</span>
          <input
            type='number'
            className='ml-2 px-2 py-1 border rounded-md'
            value={itemsPerPage}
            onChange={setItemsPerPage}
          />
        </div>
      </div>

      <div className='w-full flex items-center col-auto'>
        <button
          className='disabled:opacity-50 disabled:cursor-not-allowed paginate'
          disabled={currentPage === 1}
          onClick={handlePreviousPage}
        >
          <FeatherIcon icon='arrow-left' />
        </button>

        <div className='flex flex-1 mx-6 justify-between'>
          <RenderPaginationButtons />
        </div>

        <button
          className='disabled:opacity-50 disabled:cursor-not-allowed paginate'
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
        >
          <FeatherIcon icon='arrow-right' />
        </button>
      </div>
    </div>
  )
}

export default Pagination
