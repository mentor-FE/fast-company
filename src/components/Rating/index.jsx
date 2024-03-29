function Rating({ rating = "" }) {
  const setRateColor = (rate) => {
    if (rate < 0) return
    if (rate > 0 && rate < 3) return "text-red-400"
    if (rate >= 3 && rate < 4) return "text-yellow-400"
    if (rate >= 4 && rate < 5) return "text-cyan-400"
    return "text-green-400"
  }

  return (
    <div className="flex items-center">
      <svg
        aria-hidden="true"
        className={`w-5 h-5 ${setRateColor(rating)}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Rating star</title>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
        {rating}
      </p>
    </div>
  )
}

export default Rating
