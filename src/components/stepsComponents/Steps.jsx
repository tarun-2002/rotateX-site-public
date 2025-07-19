
import Navbar from '../Navbar'
import ChoosePayout from './ChoosePayout'
import ChooseDuration from './ChooseDuration'
import PreferredSlot from './PreferredSlot'
import PaymentMethod from './PaymentMethod'
import UploadID from './UploadId'
import AddAddress from './AddAddress'
import ConfirmCircle from './ConfirmCirce'
import FooterSection from '../FooterSection'

function Steps() {
  return (
    <div className="min-h-screen bg-white flex flex-col mt-24">
        <Navbar/>
        <div className='flex flex-row items-start justify-start text-[28px] py-4 md:text-4xl font-text-styling text-[#343F52] px-6'>Seamless Steps to Cash</div>
        <ChoosePayout />
        <ChooseDuration />
        <PreferredSlot />
        <PaymentMethod />
        <UploadID />
        <AddAddress />
        <ConfirmCircle />
        <FooterSection />
    </div>
  )
}

export default Steps