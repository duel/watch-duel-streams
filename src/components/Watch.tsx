import React, { useEffect, useState } from "react"

import { WatchLayout } from "../layouts/"
import SEO from "../components/seo"

import { TwitchIFrame } from '../components/CustomIFrames/'

const WatchPage = () => {
    const [users, setUsers] = useState([])

    const changeOutStreams = (users: any) => {
        setUsers(users)
    }

    const constructMetaTitle = () => {
        return users.length >= 2 ? `Watch ${users.join(' x ')}!` : 'Multi-Stream Page'
    }

    useEffect(() => {
        if (window.location.pathname.length > 1) {
            const pathname = window.location.pathname.slice(1, window.location.pathname.length)
            const users = pathname.split('/')
            console.log(users)
            changeOutStreams(users)
        }
    }, [])

    return (
        <WatchLayout>
          <SEO title={constructMetaTitle()} description="Watch Multiple Streams At Once" />
          { users.length ? users.map((user, index) => (
              <div key={`duel-${index}`} className="duel-group">
                <TwitchIFrame username={user} />
                <TwitchIFrame username={user} isChat={true} />
              </div>
          )) : null }
        </WatchLayout>
    )
}

export default WatchPage