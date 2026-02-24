import { Text, TextProps } from 'react-native';

export type ThemedTextProps = TextProps & {
  type?: 'default' | 'title' | 'subtitle' | 'link';
};

export function ThemedText({
  style,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  return (
    <Text
      {...rest}
      style={[
        { color: '#000' },
        type === 'title' && { fontSize: 32, fontWeight: 'bold' },
        type === 'subtitle' && { fontSize: 20, fontWeight: '600' },
        type === 'link' && { color: '#0a7ea4' },
        style,
      ]}
    />
  );
}
