module.exports = {
    presets: [
        [
            '@babel/preset-env',
            'next/babel',
            '@babel/preset-typescript',
            { targets: { node: 'current' } }
        ]
    ],
    plugins: [
        'inline-react-svg',
        'babel-plugin-styled-components',
        ['styled-components', { ssr: true }]
    ]
}
