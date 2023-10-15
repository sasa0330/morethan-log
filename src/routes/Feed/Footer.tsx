import { CONFIG } from "site.config"
import React from "react"
import styled from "@emotion/styled"
import { Profile } from "src/types"

const d = new Date()
const y = d.getFullYear()
const from = +CONFIG.since

type Props = {
  className?: string
}

const Footer: React.FC<Props> = ({ className }) => {
  const profile: Profile = CONFIG.profile
  return (
    <StyledWrapper className={className}>
      <a
        href={`https://github.com/${profile.github}`}
        target="_blank"
        rel="noreferrer"
      >
        © {profile.name} {from === y || !from ? y : `${from} - ${y}`}
      </a>
    </StyledWrapper>
  )
}

export default Footer

const StyledWrapper = styled.div`
  a {
    margin-top: 0.75rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: ${({ theme }) => theme.colors.gray10};
  }
`
