import React from "react";

const PageTitle = ({title}) =>{
    return(
        <section className="bg-blue text-white text-center py-8">
        <div className="container">
          <h1 className="text-4xl">{title}</h1>
        </div>
      </section>
    )
}

export default PageTitle

