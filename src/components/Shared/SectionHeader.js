import React from 'react';
export default function SectionHeader({ headingText }) {
    return (
        <div className="row">
            <hr className="ma-auto" style={{ width: '65%' }} />
            <h1 className="text-center text-uppercase font-weight-light col-md-12 mb-3">{headingText}</h1>
        </div>
    );
}