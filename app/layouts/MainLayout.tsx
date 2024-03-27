// "use client"
// import {useState, useEffect} from 'react'
// import TopMenu from './includes/TopMenu'
// import MainHeader from './includes/MainHeader'
// import SubMenu from './includes/SubMenu'
// import Footer from './includes/Footer'
// import Loading from '@/components/Loading'
// import useIsLoading from '@/hooks/useIsLoading'

// type MainLayoutProps = {
//     children : React.ReactNode
// }

// const MainLayout = ({children}: MainLayoutProps) => {
  
//   const [isLoading, setIsLoading] = useState(false)

//     useEffect(() =>{
//       window.addEventListener("storage", function () {
//         let res = localStorage.getItem('isLoading')
//         res === 'false' ? setIsLoading(false) : setIsLoading(true)
//       })
//     })

//   return (
//     <>
//       <div id='Mainlayout' className=' min-w-[1050px] max-w-[1300px] mx-auto'>
//         <div>
//           {isLoading ? <Loading /> : <div></div>}
//           <TopMenu />
//           <MainHeader />
//           <SubMenu />
//         </div>

//         <div>{children}</div>

//         <div>
//           <Footer />
//         </div>
//       </div>
//     </>
//   )
// }

// export default MainLayout