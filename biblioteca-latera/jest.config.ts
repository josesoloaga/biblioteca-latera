import { defaults } from 'jest-config'

const config = {
	verbose: true,
	setupFiles: ['./jest.setup.ts'],
	moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
	testPathIgnorePatterns: ['/node_modules/', '/dist/'],
	testEnvironment: 'node',
}

export default config
