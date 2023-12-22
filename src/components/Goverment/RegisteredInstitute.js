import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { getRegisteredInst } from '../../services/operations/GovermentOperations'
import Slidebar from './Slidebar'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { AwesomeButton } from 'react-awesome-button'

function RegisteredInstitute() {
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

  const { result, dashboardLoading, setDashboardLoading } =
    useContext(AppContext)
  const [data, setData] = useState([])
  const [sliderKey, setSliderKey] = useState(0)

  const fetchData = async () => {
    try {
      console.log(result.id)
      const response = await getRegisteredInst(result.id)
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

  return (
    <div className="deep    pt-16   flex flex-col">
      <Slidebar />
      <div className="      pl-80 pt-7  h-[100vh]">
        <div>
          <div class="relative inline-block flex justify-center items-center">
            <span class="heading text-2xl md:text-3xl font-bold text-cyan-100">
              Approved institute
            </span>
            <span class="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full"></span>
          </div>
          <div className="w-3/4 m-auto">
            {dashboardLoading ? (
              <div>loading..</div>
            ) : (
              <div className="mt-20">
                <Slider key={sliderKey} {...settings}>
                  {data.map((item) => (
                    <div
                      key={item._id}
                      className="bg-white h-[459px] text-black  rounded-xl"
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
                        <p>Name: {item.instituteName}</p>
                        <p>Email: {item.email}</p>
                        <p>Contact Number: {item.contactNumber}</p>
                        <p>Account Number: {item.AccountNumber}</p>
                        <p>Approved: {item.Approved}</p>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisteredInstitute
