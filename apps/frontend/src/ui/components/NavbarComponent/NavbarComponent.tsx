import React from 'react'
import { WrapperLabelText, WrapperTextValue, WrapperContent } from './style'

// Define the types for the props of the NavbarComponent if necessary
// Since the component doesn't have props, we can leave it as a function component without props

// Define types for renderContent function
type RenderContentType = 'label'; // Can extend if there are more content types

interface NavbarComponentProps {
    // Define props for the component (if there are any, for now, it's empty)
}

const NavbarComponent: React.FC<NavbarComponentProps> = () => {
    // Define renderContent function with proper types for `type` and `options`
    const renderContent = (type: RenderContentType, options: string[]): JSX.Element[] => {
        switch (type) {
            case 'label':
                return options.map((item, index) => {
                    return <WrapperLabelText key={index}>{item}</WrapperLabelText>;
                });
            default:
                return [];
        }
    }

    return (
        <WrapperContent>
            <WrapperTextValue>
                Label
            </WrapperTextValue>
            {...renderContent('label', ['option1', 'option2', 'option3'])}
        </WrapperContent>
    );
}

export default NavbarComponent;