import React from 'react';

function RefundConfirmation({ setStatus, close }) {
  const refundAmount = "$50.00"; // Placeholder for calculation

  const handleConfirm = () => {
    setStatus('Cancelled and refunded');
    close();
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Refund Confirmation</h2>
      <p>You will be refunded <span className="text-green-600">{refundAmount}</span> for unused days.</p>
      <button 
        className="mt-4 bg-primary text-white px-4 py-2 rounded" 
        onClick={handleConfirm}
      >
        Confirm Cancellation
      </button>
    </div>
  );
}

export default RefundConfirmation;
