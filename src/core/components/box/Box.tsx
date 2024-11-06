interface Props {
  size?: 'narrow' | 'medium' | 'full';
  children?: React.ReactNode;
}

/**
 * Full width box with rounded corners and shadow.
 *
 * Use size=medium for mid size
 * Use size=narrow for narrow size
 */

export const Box: React.FC<Props> = ({ size = 'full', children }) => {
  const boxSizeClass =
    size === 'narrow'
      ? 'mx-auto w-full lg:max-w-md'
      : size === 'medium'
      ? 'mx-auto w-full lg:max-w-3xl'
      : 'mx-auto w-full';
  return (
    <div className={`${boxSizeClass}`}>
      <div className="overflow-visible bg-white sm:rounded-lg sm:shadow">
        {children}
      </div>
    </div>
  );
};
