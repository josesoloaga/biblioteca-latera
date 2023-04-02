import React, { createContext } from 'react'
import { Config } from './config'

const ApiContext = createContext<Config | undefined>(undefined)

export const ApiProvider = ({ config, children }: { config: Config; children: React.ReactNode }) => {
    return <ApiContext.Provider value={config}>{children}</ApiContext.Provider>
}

export const useApiContext = () => {
    const context = React.useContext(ApiContext)
    if (!context) {
        throw new Error('useApiContext must be used within a ApiProvider')
    }
    return context
}
