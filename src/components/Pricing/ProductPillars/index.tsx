import Link from 'components/Link'
import React from 'react'
import { icons } from '../Features/icons'

interface IFeature {
    title: string
    icon?: React.ReactNode
    enterpriseSelfHostOnly?: boolean
    url?: string
}

interface IColumn {
    title: string
    section: IFeature[]
    className?: string
}

const features: IFeature[] = [
    { title: 'Product analytics', icon: icons.analytics },
    { title: 'Session recording', icon: icons.sessionRecording },
    { title: 'Feature flags', icon: icons.featureFlags },
    { title: 'A/B testing', icon: icons.abTesting },
    { title: 'Event pipelines', icon: icons.eventPipelines },
    { title: 'Data warehouse', icon: icons.dataWarehouse },
]

const productPillars: IColumn[] = [{ title: 'Features', section: features, className: 'md:row-span-2' }]

const Parent = ({ children, url }: { children: React.ReactNode; url?: string }): JSX.Element => {
    return url ? (
        <Link className="text-black hover:text-white" to={url}>
            {children}
        </Link>
    ) : (
        <>{children}</>
    )
}

const Section = ({ title, section, className = '' }: IColumn) => {
    return (
        <ul className="list-none p-0 py-3 m-0 flex space-x-5 border-dashed border-gray-accent-light border-l ml-6 pl-6">
            {section.map(({ title, icon, url }) => {
                return (
                    <li
                        key={title}
                        className={`text-black font-semibold text-[14px] flex flex-col space-y-2 items-center text-center leading-tight`}
                    >
                        <span className="w-[32px] flex justify-center items-center flex-shrink-0">{icon}</span>
                        <Parent url={url}>
                            <span>{title}</span>
                        </Parent>
                    </li>
                )
            })}
        </ul>
    )
}

export default function Features() {
    return (
        <div className="relative">
            {productPillars.map((section) => {
                return <Section key={section.title} {...section} />
            })}
        </div>
    )
}
