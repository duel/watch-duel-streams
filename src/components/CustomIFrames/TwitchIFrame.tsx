import React from 'react'
import styled from 'styled-components'
import IFrame from './IFrame'

const TwitchIFrame = ({url, title, username, isChat}: IFrame) => {

    const parentHost = () => {
        return !window ? 'watch.duel.to' : window.location.hostname
    }

    const theSource = () => {
        return !isChat ? `https://player.twitch.tv/?channel=${username}&parent=${parentHost()}` : `https://www.twitch.tv/embed/${username}/chat?parent=${parentHost()}`
    }

    const StyledFrame = styled.iframe`
        margin: 0;
    `

    return (
        <StyledFrame 
            title={title || username} 
            src={theSource()}
            className={isChat ? `duel-chat` : `duel-stream`}
            frameBorder="0" 
            allowFullScreen={true} 
            scrolling="no"></StyledFrame>
    )
} 

TwitchIFrame.defaultProps = {
    isChat: false
} as Partial<IFrame>

export default TwitchIFrame