import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default function DropdownItems({ item }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle} onMouseEnter={() => { setDropdownOpen(true) }} onMouseLeave={() => { setDropdownOpen(false) }}>
            <DropdownToggle tag="a" className="nav-link" caret>
                {item.name}
            </DropdownToggle>
            <DropdownMenu positionFixed className="p-0" >
                <div className="container bg-light p-0" style={{ minWidth: '70vw' }}>
                    <div className="row w-100 justify-content-between">
                        {item.dropdownItems.map(e => {
                            return (
                                <div className={`col-md-${12 / item.columns} mb-3`}>
                                    {e.sectionName ? <DropdownItem header style={{ fontSize: '0.9em' }}><u>{e.sectionName}</u></DropdownItem> : ""}
                                    {e.sectionItems.map(ele => {
                                        return (
                                            <DropdownItem style={{ fontSize: '0.85em' }}>{ele.name}</DropdownItem>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </DropdownMenu>
        </Dropdown>
    );
}