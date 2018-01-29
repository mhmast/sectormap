export const TEST = "TEST";

export function testAction(text)
{
    return {
            type:TEST,
            text
    };
}