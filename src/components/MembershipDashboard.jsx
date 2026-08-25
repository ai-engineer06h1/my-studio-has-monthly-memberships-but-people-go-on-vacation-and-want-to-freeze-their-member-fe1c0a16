import React, { useState } from 'react';
import FreezeMembership from './FreezeMembership';
import CancelMembership from './CancelMembership';

function MembershipDashboard() {
  const [status, setStatus] = useState('Active');
  const [showFreeze, setShowFreeze] = useState(false);
  const [showCancel, setShowCancel] = useState(false);

  return (
    <div className="space-y-4">
      <div className="p-4 bg-white shadow rounded-lg">
        <h2 className="text-lg font-semibold">Current Status: {status}</h2>
        <button 
          className="mt-2 bg-primary text-white px-4 py-2 rounded" 
          onClick={() => setShowFreeze(true)}
        >
          Freeze Membership
        </button>
        <button 
          className="mt-2 bg-secondary text-black px-4 py-2 rounded ml-2" 
          onClick={() => setShowCancel(true)}
        >
          Cancel Membership
        </button>
      </div>

      {showFreeze && <FreezeMembership setStatus={setStatus} close={() => setShowFreeze(false)} />}
      {showCancel && <CancelMembership setStatus={setStatus} close={() => setShowCancel(false)} />}
    </div>
  );
}

export default MembershipDashboard;
