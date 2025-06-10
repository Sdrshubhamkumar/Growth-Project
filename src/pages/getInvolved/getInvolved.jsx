import React from 'react'

function GetInvolved() {
  return (
    
        <div className="profile">
            {/* Heading Section */}
            <div className="heading bg-[#5A4E8C] text-white text-center py-6">
                <h1 className="text-3xl font-bold">Get Involved</h1>
            </div>

            {/* Content Section */}
            <div className="max-w-screen-lg mx-auto px-8 py-3">
                
                {/* Profile Link */}
                <div className="text-right mb-6">
                    <p className="text-gray-600">
                        <a 
                            className="text-blue-600 hover:text-blue-800" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            href="https://saath.org/"
                        >
                            Home
                        </a> » Get Involved

                    </p>
                </div>
</div>
        </div>
    
  )
}

export default GetInvolved