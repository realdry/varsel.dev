import * as React from "react";

function Search(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" height={24} width={24} x="0px" y="0px" {...props}>
      <path
        fill="currentColor"
        d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"
      />
    </svg>
  );
}

export default Search;
