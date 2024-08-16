'use client';

import { useParams } from 'solito/navigation'
import { TextLink } from 'solito/link'
import { Text } from 'app/design/typography'
import { View } from 'app/design/view'

type Params = { id: string };

export function UserDetailScreen() {
  const params = useParams<Params>()

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="mb-4 text-center font-bold">{`User ID: ${params.id}`}</Text>
      <TextLink href="/">👈 Go Home</TextLink>
    </View>
  )
}
