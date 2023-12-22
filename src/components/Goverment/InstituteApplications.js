import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import {
  getNonRegisteredInst,
  approveInst,
} from '../../services/operations/GovermentOperations'
import Slidebar from './Slidebar'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { AwesomeButton } from 'react-awesome-button'

import './Loading.css'
import './Card1.css'

function InsttituteApplications() {
  const [showMore, setShowMore] = useState(false)

  const toggleShowMore = () => {
    setShowMore(!showMore)
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    arrows: true,
  }

  const { result, dashboardLoading, setDashboardLoading, approveInstitute } =
    useContext(AppContext)
  const [data, setData] = useState([])
  const [sliderKey, setSliderKey] = useState(0)

  const fetchData = async () => {
    try {
      console.log(result.id)
      const response = await getNonRegisteredInst(result.id)
      console.log(response)
      setData(response.data)
      setDashboardLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error)
      setDashboardLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [result.id, sliderKey])

  const handleApprove = async (id, AccountNumber) => {
    try {
      console.log(id, AccountNumber)
      setDashboardLoading(true)
      await approveInst(result.id, id)
      console.log('ac')
      console.log(AccountNumber)
      await approveInstitute(AccountNumber)
      fetchData() // Fetch data again after approval
      setSliderKey((prevKey) => prevKey + 1)
    } catch (error) {
      console.error('Error approving institute:', error)
      setDashboardLoading(false)
    }
  }

  return (
    <div className="  pt-16   flex flex-col">
      <Slidebar />
      <div className="   pl-56 pt-7  h-[100vh]  ">
        <div>
          <div className="   w-3/4 m-auto ">
            {dashboardLoading ? (
              <div className="   top-64" class="ring">
                Loading
                <span className="ringin"></span>
              </div>
            ) : (
              <div className="mt-20">
                {data.map((item) => (
                  <div
                    key={item._id}
                    className={`card  ${showMore ? 'show-more' : ' '} `}
                  >
                    <div className="left">
                      <img
                        className="image1"
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                      />
                    </div>
                    <div className="right">
                      <div className="left-section">
                        <div className="name">Aspire study</div>
                        <div className="email">deepsen771@gmail.com</div>
                        <div className="account">93932r373474</div>

                        {/* Hidden section */}
                        {showMore && (
                          <div className="hidden-section">
                            <p>Additional information goes here...</p>
                          </div>
                        )}

                        {/* Show More button */}
                        <div
                          className="show-more-text"
                          onClick={toggleShowMore}
                        >
                          {showMore ? 'Show Less' : 'Show More'}
                          <span
                            className={`arrow-icon ${showMore ? 'up' : 'down'}`}
                          ></span>
                        </div>
                      </div>

                      <div className="right-section">
                        {item.Approved === 'NotApproved' && (
                          <AwesomeButton
                            className="  bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl"
                            onPress={() =>
                              handleApprove(item._id, item.AccountNumber)
                            }
                          >
                            Approve
                          </AwesomeButton>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InsttituteApplications

{
  /* <div
key={item._id}
className="robin bg-white h-[459px] text-black  rounded-xl"
>
<div className=" h-56 rounded-t-xl   bg-indigo-500 flex justify-center items-center">
  <img
    src={item.image}
    alt={item.email}
    className="h-44 w-44  rounded-full"
  ></img>
</div>

<div className="flex flex-col justify-center items-center gap-4 p-4">
  <p className=" text-xl  font-semibold">{item.email}</p>
  <p>{item.Approved}</p>
  <p className=" text-[17px]">{item.AccountNumber}</p>
  {item.Approved === 'NotApproved' && (
    <AwesomeButton
      className="  bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl"
      onPress={() =>
        handleApprove(item._id, item.AccountNumber)
      }
    >
      Approve
    </AwesomeButton>
  )}
</div>
</div> */
}
