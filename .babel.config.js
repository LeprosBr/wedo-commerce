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
        'styled-components',
        'babel-plugin-styled-components',
        'inline-react-svg',
        {
            ssr: true,
            displayName: true
        }
    ]
}
