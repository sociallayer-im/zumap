import LangContext from '../../../provider/LangProvider/LangContext'
import { useContext } from 'react'
import { styled } from 'baseui'
import {PLACEMENT, StatefulTooltip} from "baseui/tooltip";
import {Link} from "react-router-dom";

function DetailBadgeletPrivateMark () {
    const { lang } = useContext(LangContext)
    const Wrapper = styled('div', () => {
        return {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            paddingTop: '3px',
            paddingBottom: '3px',
            paddingLeft: '6px',
            paddingRight: '6px',
            color: '#F26692',
            borderRadius: '4px',
            fontSize: '12px'
        }
    })

    return (
        <Wrapper>
            <StatefulTooltip
                placement={PLACEMENT.top}
                content={ () => lang['BadgeDialog_Label_hide_tip'] } >
                <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 8.75C5.80109 8.75 5.61032 8.82902 5.46967 8.96967C5.32902 9.11032 5.25 9.30109 5.25 9.5V11.75C5.25 11.9489 5.32902 12.1397 5.46967 12.2803C5.61032 12.421 5.80109 12.5 6 12.5C6.19891 12.5 6.38968 12.421 6.53033 12.2803C6.67098 12.1397 6.75 11.9489 6.75 11.75V9.5C6.75 9.30109 6.67098 9.11032 6.53033 8.96967C6.38968 8.82902 6.19891 8.75 6 8.75ZM9.75 5.75V4.25C9.75 3.25544 9.35491 2.30161 8.65165 1.59835C7.94839 0.895088 6.99456 0.5 6 0.5C5.00544 0.5 4.05161 0.895088 3.34835 1.59835C2.64509 2.30161 2.25 3.25544 2.25 4.25V5.75C1.65326 5.75 1.08097 5.98705 0.65901 6.40901C0.237053 6.83097 0 7.40326 0 8V13.25C0 13.8467 0.237053 14.419 0.65901 14.841C1.08097 15.2629 1.65326 15.5 2.25 15.5H9.75C10.3467 15.5 10.919 15.2629 11.341 14.841C11.7629 14.419 12 13.8467 12 13.25V8C12 7.40326 11.7629 6.83097 11.341 6.40901C10.919 5.98705 10.3467 5.75 9.75 5.75ZM3.75 4.25C3.75 3.65326 3.98705 3.08097 4.40901 2.65901C4.83097 2.23705 5.40326 2 6 2C6.59674 2 7.16903 2.23705 7.59099 2.65901C8.01295 3.08097 8.25 3.65326 8.25 4.25V5.75H3.75V4.25ZM10.5 13.25C10.5 13.4489 10.421 13.6397 10.2803 13.7803C10.1397 13.921 9.94891 14 9.75 14H2.25C2.05109 14 1.86032 13.921 1.71967 13.7803C1.57902 13.6397 1.5 13.4489 1.5 13.25V8C1.5 7.80109 1.57902 7.61032 1.71967 7.46967C1.86032 7.32902 2.05109 7.25 2.25 7.25H9.75C9.94891 7.25 10.1397 7.32902 10.2803 7.46967C10.421 7.61032 10.5 7.80109 10.5 8V13.25Z" fill="#F26692"/>
                </svg>
            </StatefulTooltip>
        </Wrapper>
    )
}

export default DetailBadgeletPrivateMark
