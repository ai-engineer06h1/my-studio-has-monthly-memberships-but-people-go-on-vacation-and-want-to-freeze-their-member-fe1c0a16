import React, { useState } from 'react';

function FreezeMembership({ setStatus, close }) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleFreeze = () => {
    setStatus(`Frozen from ${startDate} to ${endDate}`);
    close();
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Freeze Your Membership</h2>
      <div className="space-y-2">
        <input 
          type="date" 
          value={startDate} 
          onChange={(e) => setStartDate(e.target.value)} 
          className="border p-2 rounded" 
          placeholder="Start Date"
        />
        <input 
          type="date" 
          value={endDate} 
          onChange={(e) => setEndDate(e.target.value)} 
          className="border p-2 rounded" 
          placeholder="End Date"
        />
      </div>
      <button 
        className="mt-4 bg-primary text-white px-4 py-2 rounded" 
        onClick={handleFreeze}
      >
        Confirm
      </button>
      <button 
        className="mt-4 bg-secondary text-black px-4 py-2 rounded ml-2" 
        onClick={close}
      >
        Cancel
      </button>
    </div>
  );
}

export default FreezeMembership;
