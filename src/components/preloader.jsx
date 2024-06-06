import '../index.scss'

function Preloader() {
   return <div className="container center prel">
      <div className="preloader-wrapper active">
         <div className="spinner-layer spinner-black">
            <div className="circle-clipper left">
               <div className="circle"></div>
            </div><div className="gap-patch">
               <div className="circle"></div>
            </div><div className="circle-clipper right">
               <div className="circle"></div>
            </div>
         </div>
      </div>
   </div>
}

export { Preloader };