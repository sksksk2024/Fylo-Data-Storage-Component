import documentationIcon from './../images/icon-document.svg';
import folderIcon from './../images/icon-folder.svg'
import uploadIcon from './../images/icon-upload.svg'
import logo from './../images/logo.svg'

function Left() {
  return (
    <>
      <div className="bg-dark-blue rounded-tr-80BR rounded-10BR p-32P pr-128P 3xs:w-256W lg:w-auto">
        <img className='w-128W mb-32M' src={logo} alt="fylo" />

        <div className='flex gap-4 h-48H p-1'>
          <img className='p-12P rounded-lg bg-very-dark-blue' src={documentationIcon} alt="Documentation Icon" />
          <img className='p-12P rounded-lg bg-very-dark-blue' src={folderIcon} alt="Folder Icon" />
          <img className='p-12P  rounded-lg bg-very-dark-blue' src={uploadIcon} alt="Upload Icon" />
        </div>
      </div>
    </>

  );
}

export default Left;