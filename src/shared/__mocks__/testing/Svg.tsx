export function SvgMock(props: React.SVGProps<SVGSVGElement>) {
  return <svg data-testid="mocked-svg" {...props} />;
}

export default SvgMock;
