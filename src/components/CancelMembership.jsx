import React, { useState } from 'react';
import RefundConfirmation from './RefundConfirmation';

function CancelMembership({ setStatus, close }) {
  const [showRefund, setShowRefund] = useState(false);

  const handleImmediateCancel = () => {
    setShowRefund(true);
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Cancel Your Membership</h2>
      {!showRefund ? (
        <div>
          <button 
            className="bg-primary text-white px-4 py-2 rounded" 
            onClick={handleImmediateCancel}
          >
            Cancel Immediately
          </button>
          <button 
            className="mt-2 bg-secondary text-black px-4 py-2 rounded ml-2" 
            onClick={() => {
              setStatus('Cancelled at end of billing cycle');
              close();
            }}
          >
            Cancel at End of Billing Cycle
          </button>
        </div>
      ) : (
        <RefundConfirmation setStatus={setStatus} close={close} />
      )}
    </div>
  );
}

export default CancelMembership;
