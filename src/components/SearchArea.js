// functional component 
import React from 'react'


const SearchArea = () => {
   return (
      <div className="container">
         <div className="row">
            <section className="col s5 offset-s3">
               <form action="">
                  <div className="input-field">
                     <input placeholder="Search an Artist or Album!" type="text" />
                  </div>
               </form>
            </section>
         </div>
      </div>
   )
}

export default SearchArea