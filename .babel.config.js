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
        'babel-plugin-styled-components',
        ['styled-components', { ssr: true }],
        'inline-react-svg'
    ]

}
