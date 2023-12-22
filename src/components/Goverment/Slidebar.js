import React, { useEffect, useContext } from 'react'
import { AiFillApple } from 'react-icons/ai'
import { AiOutlineHome } from 'react-icons/ai'
import { FiUsers } from 'react-icons/fi'
import { BsChat } from 'react-icons/bs'
import { BsQuestionLg } from 'react-icons/bs'
import { AiOutlineSetting } from 'react-icons/ai'
import { BiLockAlt } from 'react-icons/bi'
import { PiSignInBold } from 'react-icons/pi'
import './Slidebar.css'

import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import { abi } from '../../Abi'
const ethers = require('ethers')

const Slidebar = () => {
  const { account, setAccount, contractAddress, setContract, setProvider } =
    useContext(AppContext)

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)

    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on('chainChanged', () => {
          window.location.reload()
        })

        window.ethereum.on('accountsChanged', () => {
          window.location.reload()
        })
        await provider.send('eth_requestAccounts', [])
        const signer = provider.getSigner()
        const address = await signer.getAddress()
        setAccount(address)
        const contract = new ethers.Contract(contractAddress, abi, signer)
        setContract(contract)
        setProvider(provider)
      } else {
        console.error('Metamask is not installed')
      }
    }
    provider && loadProvider()
  }, [])
  return (
    <div className="body">
      <div className="container">
        <div className="navigation">
          <ul>
            <li>
              <img
                style={{ zIndex: '50' }}
                className="   pt-4   pr-4   "
                src="https://img.freepik.com/free-photo/india-republic-day-celebration-with-3d-building_23-2151015993.jpg?t=st=1703002425~exp=1703006025~hmac=f204e575d7eb453395ec032990fe88aef337c36f74c8cf27e7eda7c35a4f758b&w=1060"
                alt="Italian  sdfds Trulli"
              />
            </li>
            <li>
              <Link to={'/dashboard/goverment/goverment-profile'}>
                <span className="icon">
                  <AiOutlineHome className="iccon" />
                </span>
                <span class="title">Gov Profile</span>
              </Link>
            </li>
            <li>
              <Link to={'/dashboard/goverment/institute-applications'}>
                <span className="icon">
                  <FiUsers className="iccon" />
                </span>
                <span class="title">Institute Applications</span>
              </Link>
            </li>
            <li>
              <Link to={'/dashboard/goverment/registered-institutes'}>
                <span className="icon">
                  <BsChat className="iccon" />
                </span>
                <span class="title">Registered Institute</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Slidebar
