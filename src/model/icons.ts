import invitation from '../asset/images/invitation.png'
import album from '../asset/images/album.png'
import location from '../asset/images/location.png'
import payment from '../asset/images/payment.png'

export const iconList = [
    invitation,
    album,
    location,
    payment
]
export const iconID = [
    "invitation",
    "album",
    "location",
    "payment"
]


export interface iconClick{
    invitation:boolean
    album:boolean
    location:boolean
    payment:boolean
}