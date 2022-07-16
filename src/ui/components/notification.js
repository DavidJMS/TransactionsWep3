import Swal from 'sweetalert2'
import iconSuccess from '../../assets/success.svg'

const notification = ({
  title,
  message,
  icon
}) => {
  Swal.fire({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    icon: icon || 'success',
    iconHtml: icon === 'success' ? `<img src="${iconSuccess}" />` : '',
    title: title || '',
    text: message || '',
    width: 500,
    customClass: {
      container: 'toast-' + icon
    }
  })
}

export default notification
